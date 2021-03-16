---
date: March 9, 2021 12:00 AM
heading: Blog 3
tag: travel
author: kareem
image: /assets/hokusai-great-wave-off-kanagawa.jpg
---
When using the [Editorial Workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode) with the `github` or GitHub-connected `git-gateway` backends, Netlify CMS creates a pull request for each unpublished entry. Every time the unpublished entry is changed and saved, a new commit is added to the pull request. When the entry is published, the pull request is merged, and all of those commits are added to your project commit history in a merge commit.

The squash merge option causes all commits to be "squashed" into a single commit when the pull request is merged, and the resulting commit is rebased onto the target branch, avoiding the merge commit altogether.

To enable this feature, you can set the following option in your Netlify CMS `config.yml`: