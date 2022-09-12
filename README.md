# Welcome to the website for the US Research Software Sustainability Institute

URSSI is a newly launched institute with funding from the Alfred P. Sloan Foundation and the National Science Foundation. The effort began as a planning grant (2018-2022) from [NSF](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1743188).

## How to add content

This is a static site based on Hugo. To preview additions and changes on your local machine, you will need to [install Hugo](https://gohugo.io/getting-started/installing/)

| Activity | Command  | File to edit |
|:--|:--|:--|
| Create a blog post | `hugo new blog/<title_of_post>.md`  | Then edit the front matter and content of `/content/blog/<title_of_post.md>` in your editor.  |
| Adding a standard page | `hugo new /<title_of_page>.md` | Then edit the front matter and content of `/content/<title_of_page.md>` in your editor.   |
| Adding a project page | `hugo new projects/<title_of_page>.md` | Then edit the front matter and content of `/content/projects/<title_of_page.md>` in your editor.  |
| Adding a job page | `hugo new jobs/<title_of_page>.md` | Then edit the front matter and content of `/content/jobs/<title_of_page.md>` in your editor.  |

You can also add content without Hugo. Create a new file in the appropriate folder from the web editor, add the appropriate yml and then open a PR. Netlify will show you a preview of the new site in the PR.

## Preview the site locally

The site will be built automatically once you push commits to GitHub. If you wish to preview locally, follow the steps below.

This requires you to have Hugo installed locally. You can learn more about installing Hugo here: https://gohugo.io/getting-started/installing/

To preview draft content: 

```
hugo serve -F
```

Once you're happy with your post, remove `draft: true` from the yml and send a pull request explaining your additions and/or changes. 


## Sending a pull request

- Fork the repo if you don't have write access, otherwise create a new branch
- Make changes and send a pull request.
- Wait for PR to build, then click Details to preview changes live.

![](https://i.imgur.com/lQZgpM5.png)

- Wait for someone with write access to merge.

## Code of Conduct

This website has a [code of conduct](https://github.com/si2-urssi/website/blob/master/CODE_OF_CONDUCT.md)

## Funding

The institute is funded by grants from the Alfred P. Sloan Foundation and the National Science Foundation.