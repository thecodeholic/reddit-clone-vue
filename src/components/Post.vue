<template>
  <b-card no-body class="post mb-3">
    <router-link :to="{name: 'PostView', params: {id: post.id}}" class="text-dark text-decoration-none">
      <div class="d-flex">
        <div class="col-upvotes d-flex flex-column align-items-center justify-content-center">
          <b-button variant="light" class="btn-upvote">
            <i class="fas fa-arrow-up"></i>
          </b-button>
          <span class="upvotes">
          {{ post.upvotes }}
        </span>
          <b-button variant="light" class="btn-downvote">
            <i class="fas fa-arrow-down"></i>
          </b-button>
        </div>
        <div class="col-media d-flex justify-content-center align-items-center p-2">
          <b-img v-if="post.type === 'media' && post.image" :src="post.image" fluid/>
          <video v-if="post.type === 'media' && post.video" :src="post.video"></video>
          <a v-if="post.type === 'link' && post.link" :href="post.link" target="_blank">
            <b-icon icon="link"></b-icon>
          </a>
        </div>
        <div class="col-content d-flex flex-column p-2">
          <h5 class="post-title">
            {{ post.title }}
          </h5>
          <div class="post-info flex-fill">
            <router-link to="/"><b>r/{{ post.subreddit.name }}</b></router-link>
            <span class="text-muted">
            Posted by <router-link to="/">u/{{ post.user.username }}</router-link>
            {{ post.create_date | moment("from") }}
          </span>
          </div>
          <div class="post-actions">
            <b-button size="sm" variant="light">
              <i class="fas fa-comments"></i> {{ post.comments }} Comments
            </b-button>
          </div>
        </div>
      </div>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/variables";

.post {
  a {
    color: $dark;
  }
}

.col-upvotes {
  background: $gray-200;
}

.btn-upvote,
.btn-downvote {
  border: none;
  background: transparent;
  color: $gray-600;
}

.btn-upvote {
  &:hover {
    color: $orange;
  }
}

.btn-downvote {
  &:hover {
    color: $blue;
  }
}

.col-media {
  width: 100px;
  min-width: 100px;
  font-size: 2rem;
  background: $gray-100;
}
</style>