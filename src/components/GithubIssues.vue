<template>
    <div>
      <v-row>
        <v-col cols="12">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Arquivos</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="file in files" :key="file.url">
                    <td>{{ file.name }}</td>
                  </tr>
                </tbody>
              </template>
          </v-simple-table>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-progress-circular indeterminate color="pink" v-if="loading"></v-progress-circular>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script>
  
    import {api} from '~api'
  
    export default {
      props: ['repo'],
      data: () => ({
        docs: [],
        loading: false,
        temmais: false,
        currentPage: 1
      }),
      methods: {
        async PegaArquivos(){
          this.loading = true
          const files = await api.PegaArquivos(this.repo.owner.login , this.repo.name)
          this.docs = this.files.concat(files)
          this.temmais = files.length > 0
        }
      },
      watch: {
        repo(){
          this.docs = []
          if (this.repo) {
            this.PegaArquivos()
          } else {
            this.docs = []
          }
        }
      }
    }
  </script>