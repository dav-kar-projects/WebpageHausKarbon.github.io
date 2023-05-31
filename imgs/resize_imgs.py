import cv2
from pathlib import Path

from bs4 import BeautifulSoup


def extract_image_sizes(html_code):
    """
    Extracts image sizes and URLs from an HTML code string and returns them as a dictionary
    with the screen width as the key.
    """
    soup = BeautifulSoup(html_code, "html.parser")
    image_sizes = {}
    for source_tag in soup.find_all("source"):
        try:
            screen_width = int(source_tag["media"].split(" ")[1].split("px")[0])
            image_url = source_tag["srcset"].split()[0]
            image_width = int(source_tag["srcset"].split("/")[-2].split("_")[0])
            image_height = int(source_tag["srcset"].split("/")[-2].split("_")[2])
            image_sizes[screen_width] = {
                "url": image_url,
                "width": image_width,
                "height": image_height,
            }

        except Exception as e:
            print(e)
    return image_sizes


def get_image_paths(directory):
    """
    Scans a directory recursively for image files and returns a list of their paths.
    """
    image_extensions = [
        ".jpg",
        ".jpeg",
        ".png",
        ".bmp",
        ".gif",
    ]  # Add any other image extensions you need
    image_paths = []
    for file_path in Path(directory).rglob("*"):
        if file_path.is_file() and file_path.suffix.lower() in image_extensions:
            image_paths.append(str(file_path))
    return image_paths


def scale_and_save_imgs(image_pats, sizes, right_left):
    for image_path in image_pats:
        for size in sizes:
            img = cv2.imread(str(image_path))
            # Scale the image to the desired size
            height = int(img.shape[0] * sizes[size]["width"] / img.shape[1])
            scaled_img = cv2.resize(img, (sizes[size]["width"], height))

            # Save the scaled image to a new file
            dir = Path(f"{Path(image_path).parent.parent}/images_{size}")
            if not dir.exists():
                dir.mkdir(parents=True)
            name = str(Path(image_path).name)
            if Path(image_path).suffix == ".png":
                name = name.replace(".png", ".jpg")
            new_img_name = dir / Path(right_left + "_" + name)
            cv2.imwrite(str(new_img_name), scaled_img)


html_code_left = """
<picture>
                <source media="(min-width: 1025px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/650_x_594/-c-hannes-niederkofler-web-5721.webp"
                    type="image/webp">
                <source media="(min-width: 1025px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/650_x_594/-c-hannes-niederkofler-web-5721.jpg">
                <source media="(min-width: 769px) and (max-width: 1024px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/517_x_594/-c-hannes-niederkofler-web-5721.webp"
                    type="image/webp">
                <source media="(min-width: 769px) and (max-width: 1024px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/517_x_594/-c-hannes-niederkofler-web-5721.jpg">
                <source media="(min-width: 668px) and (max-width: 768px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/368_x_594/-c-hannes-niederkofler-web-5721.webp"
                    type="image/webp">
                <source media="(min-width: 668px) and (max-width: 768px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/368_x_594/-c-hannes-niederkofler-web-5721.jpg">
                <source media="(min-width: 415px) and (max-width: 667px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/615_x_390/-c-hannes-niederkofler-web-5721.webp"
                    type="image/webp">
                <source media="(min-width: 415px) and (max-width: 667px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/615_x_390/-c-hannes-niederkofler-web-5721.jpg">
                <source media="(max-width: 414px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/684_x_720/-c-hannes-niederkofler-web-5721.webp"
                    type="image/webp">
                <source media="(max-width: 414px)"
                    srcset="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/684_x_720/-c-hannes-niederkofler-web-5721.jpg">
                <img src="/media/bbae46f2-3909-488b-8e45-8db872ae6c49/20220214122940/684_x_720/-c-hannes-niederkofler-web-5721.jpg"
                    class="fit-image" width="650" height="594" loading="lazy">
            </picture>
"""
html_code_right = """
<picture>
                <source media="(min-width: 1025px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/465_x_540/-c-hannes-niederkofler-web-5702.webp"
                    type="image/webp">
                <source media="(min-width: 1025px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/465_x_540/-c-hannes-niederkofler-web-5702.jpg">
                <source media="(min-width: 769px) and (max-width: 1024px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/370_x_540/-c-hannes-niederkofler-web-5702.webp"
                    type="image/webp">
                <source media="(min-width: 769px) and (max-width: 1024px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/370_x_540/-c-hannes-niederkofler-web-5702.jpg">
                <source media="(min-width: 668px) and (max-width: 768px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/263_x_540/-c-hannes-niederkofler-web-5702.webp"
                    type="image/webp">
                <source media="(min-width: 668px) and (max-width: 768px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/263_x_540/-c-hannes-niederkofler-web-5702.jpg">
                <source media="(min-width: 415px) and (max-width: 667px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/615_x_390/-c-hannes-niederkofler-web-5702.webp"
                    type="image/webp">
                <source media="(min-width: 415px) and (max-width: 667px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/615_x_390/-c-hannes-niederkofler-web-5702.jpg">
                <source media="(max-width: 414px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/684_x_720/-c-hannes-niederkofler-web-5702.webp"
                    type="image/webp">
                <source media="(max-width: 414px)"
                    srcset="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/684_x_720/-c-hannes-niederkofler-web-5702.jpg">
                <img src="/media/92b83dce-ce00-44a7-b91a-5df738c31997/20220214122938/684_x_720/-c-hannes-niederkofler-web-5702.jpg"
                    class="fit-image" width="684" height="720" loading="lazy">
            </picture>

"""
src_dir = Path(
    r"C:\Users\david.karbon\Documents\Webpage\WebpageHausKarbon\imgs\src_to_scale"
)

imgs_to_scale = get_image_paths(src_dir)
image_sizes_left = extract_image_sizes(html_code_left)
image_sizes_right = extract_image_sizes(html_code_right)
scale_and_save_imgs(imgs_to_scale, image_sizes_left, "left")
scale_and_save_imgs(imgs_to_scale, image_sizes_right, "right")
print()

