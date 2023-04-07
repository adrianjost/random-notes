export default {
  async paths() {
    return [
      { params: { article: "test1" }, content: "{}" },
      { params: { article: "test2" }, content: "Test 2" },
      { params: { article: "test3" }, content: "Test 3" },
      { params: { article: "test4" }, content: "Test 4" },
    ];
  },
};
