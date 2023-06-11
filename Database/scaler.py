import cv2
from pathlib import Path


def get_filenames(directory):
    path = Path(directory)
    filenames = [file.name for file in path.iterdir() if file.is_file()]
    return filenames


def resize_images(directory, sizes):
    path = Path(directory)
    image_files = get_filenames(path)
    for img_f in image_files:
        if "hq" in img_f or "png" in img_f:
            continue
        image_file = Path(directory) / Path(img_f)
        img = cv2.imread(str(image_file))
        if img is None:
            continue
        for size in sizes:
            new_filename = f"{image_file.stem}_hq{image_file.suffix}"
            new_filepath = path.joinpath(new_filename)
            img_width = img.shape[1]
            new_width = size
            new_height = int(size * img.shape[0] / img_width)

            # Resize the image while preserving the aspect ratio
            resized_img = cv2.resize(img, (new_width, new_height))

            cv2.imwrite(str(new_filepath), img)
            cv2.imwrite(str(image_file), resized_img)


# Directory path containing the images
directory = (
    r"C:\Users\david.karbon\Documents\Webpage\WebpageHausKarbon\Database\Algemein"
)

# Sizes to resize the images to
sizes = [1600]

# Call the resize_images function
resize_images(directory, sizes)
