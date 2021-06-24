# How to create a pill

Each git pill consist in a markdown file under the `/pills` folder. In order to create a new pill, do the following steps:

- Create a new Markdown (`.md`) file with the name of your pill in the `/pills` folder.  
  File name example: `git-rebase.md`
- As title, use a `#` for the name of the pill. For secondary sections, use `##`.
- Add some SEO words and descriptions. See [frontmatter head](https://vitepress.vuejs.org/guide/frontmatter.html#head) for more info. 
  You can take a look to the [index.md](https://github.com/guidesmiths/git-pills/blob/main/docs/index.md) file where you can find an example of use.
- Go to `/pills/index.md` file and add your pill in the corresponding slot (basic, medium, advanced). Sort it alphabetically.
- Create a Pull Request with your git pill.

Every markdown extension you can use, is listed [here](https://vitepress.vuejs.org/guide/markdown.html).
Please, take a look for fully understand how it works.

## Vitepress
Made with [VitePress](https://vitepress.vuejs.org/). VitePress is [VuePress](https://vuepress.vuejs.org/)' little brother, built on top of [Vite](https://vitejs.dev/).
