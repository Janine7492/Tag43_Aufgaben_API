fetch("https://picsum.photos/v2/list")
    .then((response) => response.json())
    .then((data) => {

        console.log(data);

        data.forEach(image => {
            const author = image.author;
            const url = image.url;

            console.log(author);
            console.log(url);

            const mainElement = document.createElement("figure");
            const caption = document.createElement("figcaption");
            const img = document.createElement("img");

            caption.innerHTML = `Author: ${author}`;
            img.src = image.download_url;
            img.alt = `Image by ${author}`;

            mainElement.appendChild(img);
            mainElement.appendChild(caption);
            document.body.appendChild(mainElement);
        });
    })
