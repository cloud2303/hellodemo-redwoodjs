export const standard = defineScenario({
  // comment: {
  //   one: {
  //     data: {
  //       name: 'String',
  //       body: 'String',
  //       post: { create: { title: 'String', body: 'String' } },
  //     },
  //   },

  //   two: {
  //     data: {
  //       name: 'String',
  //       body: 'String',
  //       post: { create: { title: 'String', body: 'String' } },
  //     },
  //   },
  // },
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
          },
        },
      },
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
          },
        },
      },
    },
  },
})
export const postOnly = defineScenario({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
      },
    },
  },
})
