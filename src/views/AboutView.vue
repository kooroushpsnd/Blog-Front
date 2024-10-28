<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title class="headline text-center">About Me</v-card-title>
          <v-card-text :style="{ fontSize: '15px' }">
            <p>
              Hello ,I'm Kooroush Pasandideh, a passionate web developer with a love for creating interactive and user-friendly applications. 
              My goal is to build applications that provide seamless experiences for users.
            </p>
            <br>
            <v-divider></v-divider><br>
            <p>
              Your Space for Sharing Ideas and Inspiration
              Dive into a world where thoughts become words and creativity knows no bounds. My blog is a dynamic platform designed for anyone who wants to share their stories, insights, and passions with the world. Whether you’re a seasoned writer or just starting your journey, this is the place to express yourself.

              Features:
              Post Your Thoughts: Write and publish engaging blog posts on topics that matter to you. Share your expertise, experiences, and opinions with an audience eager to read and connect.

              Edit with Ease: Have a change of heart? No problem! Our intuitive editing tools allow you to revise and enhance your posts whenever inspiration strikes.

              Explore and Discover: Browse through a diverse range of blogs written by others. Gain fresh perspectives, learn something new, or simply enjoy the beauty of written expression.

              User-Friendly Interface: Designed with you in mind, our platform offers a seamless and enjoyable writing experience. Focus on what truly matters—your content!
              <br><br>
              <v-divider></v-divider><br>
              <span :style="{ fontWeight: 'bold' }">Join the Community</span><br>
              Become a part of a vibrant community of writers and readers. Engage with others through comments, share your favorite posts, and discover new voices in the blogosphere. Your journey of creativity and expression begins here.

              <br><br>
              <v-divider></v-divider><br>
              <span :style="{ fontWeight: 'bold'}">Start Writing Today!</span><br>
              Embrace your passion for writing and let your voice be heard. Sign up now to start your blogging adventure and unleash your creativity!
            </p>
            <p>
              Feel free to reach out to me through my social media accounts below!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="blue"
              href="https://github.com/kooroushpsnd"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              color="blue"
              href="https://t.me/kpthemighty"
              target="_blank"
              rel="noopener"
            >
              Telegram
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
