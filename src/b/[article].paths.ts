export default {
  async paths() {
    return [
      {
        params: { article: "folder1/test1" },
        content: JSON.stringify({
          type: "storyblok",
          title: "Title!!!",
          content: "folder1 - Test 1",
          head: [
            [
              "meta",
              {
                property: "og:title",
                content: "folder1 - Test 1",
              },
            ],
          ],
        }),
      },
    ];
  },
};
