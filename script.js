const blogData = [
    {
        subTitle: "Neo-Brutalism Design",
        title: "",
        mainText: "Neo-Brutalism in web design and art has captivated the industry with its raw, unpolished aesthetic that emphasizes functionality and authenticity. Drawing inspiration from the mid-20th-century architectural movement, Neo-Brutalism rejects the overly polished and minimalist designs prevalent today, favouring a more honest and straightforward approach.<br><br>Neo-Brutalism stands out as a bold and rebellious choice in a world where many websites look and feel the same, defying conventional design norms and making a statement. Emphasizing functionality over aesthetics, this utilitarian approach ensures that design serves its purpose effectively without unnecessary embellishments. By introducing a unique visual language, Neo-Brutalism encourages designers to think outside the box and fosters creativity and innovation.<br><br>Rejecting modern web design conventions pushes boundaries, leading to more engaging and effective user experiences. The minimalist and utilitarian nature of Neo-Brutalism contributes to more sustainable web design practices, creating lighter, faster, and more efficient websites. Its rise can be attributed to cultural shifts towards authenticity and transparency, as people seek more genuine experiences in both the physical and digital worlds.<br><br>Social media platforms like Instagram and Pinterest have played a significant role in popularizing Neo-Brutalism, with designers and artists sharing their bold, brutalist creations, inspiring others to adopt the trend. Major tech industry players, such as Stripe and Dropbox, have also embraced Neo-Brutalism, further propelling its popularity and lending credibility and visibility to this distinctive design approach.",
        date: "June 20, 2024",
        imageUrl: "./images/neo-brut.png"
    },
    // {
    //     subTitle: "Travel",
    //     title: "Top 10 Destinations for 2024",
    //     mainText: "Discover the most popular travel destinations for the upcoming year.",
    //     date: "July 20, 2024",
    //     imageUrl: "path/to/image2.jpg"
    // }
    
    // Add more blog data as needed
];

function populateBlogItems(data) {
    const blogResults = document.getElementById('blogResults');

    data.forEach(blog => {
        const blogItemContainer = document.createElement('div');
        blogItemContainer.className = 'blog-item--container';

        blogItemContainer.innerHTML = `
            <div class="blog-content--titles">
                <h6 class="blogSubTitle">${blog.subTitle}</h6>
                <h2 class="blogTitle">${blog.title}</h2>
                <div class="blog-image--container">
                    <img src="${blog.imageUrl}" alt="${blog.title}">
                </div>
            </div>
            <div class="blog-content--text">
                <p class="blogMainText">${blog.mainText}</p>
                <div class="blog-date">
                    <h6 class="blogDate">${blog.date}</h6>
                </div>
            </div>
        `;

        blogResults.appendChild(blogItemContainer);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    populateBlogItems(blogData);
});