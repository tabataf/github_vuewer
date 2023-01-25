<template>
    <v-container>
      <GithubRepo @reposelected="onRepoSelected"/>
      <GithubContent :repo="repo"/>
    </v-container>
  </template>
  <script>
    import GithubRepo from './GithubRepo';
    import GithubContent from "./GithubContent";
    export default {
      components: {
        GithubRepo,
        GithubContent
      },
      data: () => ({
        repo: null
      }),
      methods: {
        onRepoSelected(repo){
          this.repo = repo
        }
      }
    }
  </script>