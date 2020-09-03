/**
 * Created by TheCodeholic on 8/1/2020.
 */
import httpClient from "@/plugins/axios";
export const SET_POSTS = 'SET_POSTS';

const posts = {
  namespaced: true,
  state: {
    posts: [
      // {
      //   id: 1,
      //   title: 'This pleases me.',
      //   type: 'media',
      //   image: 'https://preview.redd.it/sr2psh6okae51.jpg?width=640&height=790&crop=smart&auto=webp&s=04fbadc07e4d4ad7c23dd6532534f7ebef35819d',
      //   comments: 675,
      //   user: {
      //     id: 1,
      //     username: 'zura'
      //   },
      //   date: '2020-08-01 09:44:00',
      //   subreddit: {
      //     id: 1,
      //     name: 'MadeMeSmile'
      //   }
      // },
      // {
      //   id: 2,
      //   title: 'Javascript weird parts',
      //   type: 'text',
      //   text: 'Lorem ipsum something',
      //   comments: 123,
      //   user: {
      //     id: 2,
      //     username: 'brad'
      //   },
      //   date: '2020-08-01 08:44:00',
      //   subreddit: {
      //     id: 2,
      //     name: 'javascript'
      //   }
      // },
      // {
      //   id: 3,
      //   title: 'Prince Andrew lobbied US government for better plea deal for a former friend in the disgraced late financier’s underage prostitution case, newly released Ghislaine Maxwell documents claim',
      //   type: 'link',
      //   link: 'https://www.independent.co.uk/news/world/americas/prince-andrew-jeffrey-epstein-ghislaine-maxwell-plea-deal-pedophile-florida-a9647851.html',
      //   comments: 675,
      //   user: {
      //     id: 1,
      //     username: 'zura'
      //   },
      //   date: '2020-08-01 07:44:00',
      //   subreddit: {
      //     id: 3,
      //     name: 'worldnews'
      //   }
      // },
    ]
  },
  actions: {
    async getPosts({commit}) {
      const {status, data} = await httpClient.get('/post')
      if (status === 200) {
        commit(SET_POSTS, data)
      }
    }
  },
  mutations: {
    [SET_POSTS]: (state, posts) => state.posts = posts
  }
}

export default posts;