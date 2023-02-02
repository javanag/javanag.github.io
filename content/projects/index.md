---
title: "Projects by Javan"
type: single
---
# Projects
> What I cannot create, I do not understand. - [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman "He's really spitting facts about me")

<br>

## {{< fa fa-solid fa-images >}} imagefy!
Image uploading and sharing platform

- [{{< fa fa-brands fa-github-alt >}} GitHub](https://github.com/javanag/imagefy)

{{< figure src="/images/imagefy.jpg" alt="A screenshot of the imagefy user interface." >}}

Registered users can upload images and set access controls per-image. Open images are indexed on the homepage stream of images for all users, Unlisted images are viewable to all with a direct link, Secret images are only visible to the uploader. Click the surprise link to be taken to a random Open image!

Built using Rails with Postgres. Image uploads are stored on S3. Containerized using Docker to make it easy to develop, and run a GitHub Actions test pipeline on pushes or pull requests. Deployed automatically from master to Heroku*.

**was deployed until the Heroku free tier ended*. RIP.
