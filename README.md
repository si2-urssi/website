# Welcome to the website for the US Research Software Sustainability Institute

The website is a Hugo static site and is automatically deployed in each commit. You will need to install `Hugo` locally to build and test the site before sending a pull-request or pushing a commit.

## Basic Hugo commands


**Adding a new blog post**


```
hugo new blog/<title_of_post>.md
```

Then edit the front matter and content of `/content/blog/<title_of_post.md>` in your editor. 


**Adding a regular page**


```
hugo new /<title_of_page>.md
```

Then edit the front matter and content of `/content/<title_of_page.md>` in your editor. 

**Adding a workshop page**


```
hugo new workshop/<title_of_page>.md
```

Then edit the front matter and content of `/content/workshop/<title_of_page.md>` in your editor. 



## Preview The Site Locally

This requires you to have Hugo installed locally. You can learn more about Hugo here: https://gohugo.io/getting-started/installing/


```
hugo server -D
```



Once you're happy with your post, remove the draft setting in the header and send a pull-request.

