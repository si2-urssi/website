# Welcome to the website for the US Research Software Sustainability Institute

URSSI is a recently funded [NSF project](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1743188) designed to conceptualize a research software institute for the US. The effort will be carried out as a series of workshops and surveys to better understand how individuals and teams work to develop and maintain sustainable software in research institutions. 

## How to add content

| Activity | Command  | File to edit |
|:--|:--|:--|
| Create a blog post | `hugo new blog/<title_of_post>.md`  | Then edit the front matter and content of `/content/blog/<title_of_post.md>` in your editor.  |
| Adding a standard page | `hugo new /<title_of_page>.md` | Then edit the front matter and content of `/content/<title_of_page.md>` in your editor.   |
| Adding a workshop page | `hugo new workshop/<title_of_page>.md` | Then edit the front matter and content of `/content/workshop/<title_of_page.md>` in your editor.  |

You can also add content without Hugo (but you wont be able to preview the site) by copying any markdown file and changing the slug/date/author. 

## Preview The Site Locally

This requires you to have Hugo installed locally. You can learn more about installing Hugo here: https://gohugo.io/getting-started/installing/

To preview draft content: 

```
hugo server -D
```

Once you're happy with your post, remove `draft: true` from the yml and send a pull request explaining your additions and/or changes.


## Sending a pull reqest

- Fork the repo if you don't have write access, otherwise create a new branch
- Make changes and send a pull request.
- Wait for PR to build, then click Details to preview changes live.

![](https://i.imgur.com/lQZgpM5.png)

- Wait for someone with write access to merge.

## Code of Conduct

This website has a [code of conduct](https://github.com/si2-urssi/website/blob/master/CODE_OF_CONDUCT.md)

