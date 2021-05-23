<template>
  <div>
    <img
      src="https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/icon%2Fice_screenshot_20210421-092705.png?alt=media&token=c2047817-6f83-46a3-aa1a-ce4fd4ba8722"
      alt="Mountain View"
      width="1349"
      height="600"
    />
    <div class="container container2">
      <p><span class="script">My</span> Perfidious pangram</p>
    </div>

    <body>
      <v-row>
        <v-col cols="12" sm="6">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="350"
              max-width="350"
            >
              <v-card-text
                class="font-weight-medium mt-12 text-center subtitle-1"
              >
                Open Delay (Mouse enter)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>

        <v-col cols="12" sm="6">
          <v-hover v-slot="{ hover }" close-delay="200">
            <v-card
              :elevation="hover ? 16 : 2"
              :class="{ 'on-hover': hover }"
              class="mx-auto"
              height="350"
              max-width="350"
            >
              <v-card-text
                class="font-weight-medium mt-12 text-center subtitle-1"
              >
                Close Delay (Mouse leave)
              </v-card-text>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </body>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>
.container2 *
  font-feature-settings: 'ss01'

  .container2 .script
    font-feature-settings: 'salt'

  .inactive .container2 *
    font-feature-settings: 'ss01' 0, 'salt' 0

.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  background: #cf8989
  >.v-card__text
    color: #e91e63

v-footer.v-sheet.theme--light.v-footer--fixed.cyan
    left: 0px
    right: 120px
    bottom: 0px

// body
//   /* Путь до изображения */
//   background-image: url("https://firebasestorage.googleapis.com/v0/b/my-sait-v.appspot.com/o/icon%2Fice_screenshot_20210421-092705.png?alt=media&token=c2047817-6f83-46a3-aa1a-ce4fd4ba8722")

//   /* Фоновое изображение всегда отцентрировано по вертикали и горизонтали */
//   background-position: center center

//   /* Фоновое изображение не повторяется */
//   background-repeat: no-repeat

//   /* Фоновое изображение зафиксировано в окне просмотра, поэтому оно не смещается, когда высота контента больше высоты изображения */
//   background-attachment: fixed

//   /* Вот что позволяет фоновому изображению подстраиваться под размер контейнера */
//   background-size: cover

//   /* Устанавливает фоновый цвет, который будет отображаться, пока загружается фоновое изображение */
//   background-color: #464646
</style>
