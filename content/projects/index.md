---
title: "Projects by Javan"
type: single
---
# Projects
> What I cannot create, I do not understand. - [Richard Feynman](https://en.wikipedia.org/wiki/Richard_Feynman "He's really spitting facts about me")

<br>

## [Anishare](https://anishare.co)
Collaborative animation social platform

<br>

{{< figure
    src="/images/anishare.jpg"
    alt="A screenshot of the thumbnails of my collaboration posts on Anishare"
    caption="Thumbnails of my collaborations with other creators on Anishare"
>}}

<br>

Creators can make Flipnote-style animations together in real time in the browser. Animations are stored in the cloud and accessible between devices, and can be exported to MP4, GIF, and PNG image sequences.

They can also be published on the site for other users to interact with via clapping, commenting, and remixing.

<br>

{{< figure
    src="/images/anishare-editor.jpg"
    alt="A screenshot of the Anishare editor with a happy animation open"
    caption="Editing an animation on Anishare"
>}}

<br>

The editor supports up to 4 users collaborating on the same animation. It is meant to be minimal and accessible, so that it is easy to jump in, create, and have fun.

Inspired by my experiences using [Flipnote Studio](https://en.wikipedia.org/wiki/Flipnote_Studio) on the Nintendo DSi growing up, where kids from around the world made magical moving pictures.

Built using [tsoa](https://tsoa-community.github.io/docs/) (with [Koa](https://koajs.com/)) on the back end, [Next.js](https://nextjs.org/) on the front, everything written in TypeScript (naturally). Postgres as a database, Redis for in-memory storage. Containerized with Docker to make development, deployment, and life easier.
