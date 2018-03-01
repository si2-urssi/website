# Welcome to the website for the US Research Software Sustainability Institute

The website is a Hugo static site and is automatically deployed in each commit. You will need to install `Hugo` locally to build and test the site before sending a pull-request or pushing a commit.

## Basic Hugo commands


**Adding a new blog post**


```
hugo new blog/<title_of_post>.md
```

Then edit the front matter and content of `/content/blog/<title_of_post.md>` in your editor. You can see a live preview of the site by running 

```
hugo server -D
```


**Adding a regular page**


```
hugo new /<title_of_page>.md
```

Then edit the front matter and content of `/content/<title_of_page.md>` in your editor. You can see a live preview of the site by running 

```
hugo server -D
```



Once you're happy with your post, remove the draft setting in the header and send a pull-request.

