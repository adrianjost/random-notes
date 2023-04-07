export default {
  async paths() {
    return [
      { params: { article: "folder1/test1" }, content: "{}" },
      { params: { article: "folder1/test2" }, content: "Test 2" },
      { params: { article: "folder2/test3" }, content: "Test 3" },
      { params: { article: "test4" }, content: "Test 4" },
    ];
  },
};
