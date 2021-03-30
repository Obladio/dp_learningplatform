const routes = {
  "/": {
    key: "root",
    title: "Root",
    container: require("../containers/Home").default,
    reducer: require("../containers/Home").reducer,
    sagas: require("../containers/Home").sagas,
    private: true,
    exact: true,
  },
  "/:lang": {
    key: "home",
    title: "Home",
    container: require("../containers/Home").default,
    reducer: require("../containers/Home").reducer,
    sagas: require("../containers/Home").sagas,
    private: true,
    exact: true,

    "/login": {
      key: "login",
      title: "Login",
      container: require("../containers/Login").default,
      reducer: require("../containers/Login").reducer,
      sagas: require("../containers/Login").sagas,
      private: false,
    },
    "/login-successful": {
      key: "loginsuccessful",
      container: require("../containers/LoginSuccessful").default,
      sagas: require("../containers/LoginSuccessful").sagas,
      reducer: require("../containers/LoginSuccessful").reducer,
      private: true,
    },
    "/logout": {
      key: "logout",
      title: "Logout",
      container: require("../containers/Logout").default,
      sagas: require("../containers/Logout").sagas,
      private: false,
    },
    "/knowledge/articles": {
      key: "knowledgeallarticles",
      title: "Knowledge All Articles",
      container: require("../containers/KnowledgeAllArticles").default,
      reducer: require("../containers/KnowledgeAllArticles").reducer,
      sagas: require("../containers/KnowledgeAllArticles").sagas,
      private: true,
    },
    "/knowledge/category/:id": {
      key: "knowledgesubcategories",
      title: "Knowledge Subcategories",
      container: require("../containers/KnowledgeSubcategories").default,
      reducer: require("../containers/KnowledgeSubcategories").reducer,
      sagas: require("../containers/KnowledgeSubcategories").sagas,
      private: true,
    },
    "/knowledge/articles/:id": {
      key: "knowledgearticles",
      title: "Knowledge Articles",
      container: require("../containers/KnowledgeArticles").default,
      reducer: require("../containers/KnowledgeArticles").reducer,
      sagas: require("../containers/KnowledgeArticles").sagas,
      private: true,
    },
    "/knowledge/article/:id": {
      key: "knowledgesingle",
      title: "Single Knowledge Article",
      container: require("../containers/KnowledgeSingle").default,
      reducer: require("../containers/KnowledgeSingle").reducer,
      sagas: require("../containers/KnowledgeSingle").sagas,
      private: true,
    },
    "/faq/articles/:id": {
      key: "faqarticles",
      title: "FAQ Articles",
      container: require("../containers/FAQArticles").default,
      reducer: require("../containers/FAQArticles").reducer,
      sagas: require("../containers/FAQArticles").sagas,
      private: true,
    },
    "/learning/topics": {
      key: "learning",
      title: "Learning Topics",
      container: require("../containers/Learning").default,
      reducer: require("../containers/Learning").reducer,
      sagas: require("../containers/Learning").sagas,
      private: true,
    },
    "/learning/topic/:id": {
      key: "learningmodules",
      title: "Learning Modules",
      container: require("../containers/LearningModules").default,
      reducer: require("../containers/LearningModules").reducer,
      sagas: require("../containers/LearningModules").sagas,
      private: true,
    },
    "/learning/articles/:id": {
      key: "learningarticles",
      title: "Learning Articles",
      container: require("../containers/LearningArticles").default,
      reducer: require("../containers/LearningArticles").reducer,
      sagas: require("../containers/LearningArticles").sagas,
      private: true,
    },
    "/learning/article/:id": {
      key: "learningsingle",
      title: "Single Learning Article",
      container: require("../containers/LearningSingle").default,
      reducer: require("../containers/LearningSingle").reducer,
      sagas: require("../containers/LearningSingle").sagas,
      private: true,
    },
    "/search": {
      key: "search",
      title: "Search",
      container: require("../containers/Search").default,
      reducer: require("../containers/Search").reducer,
      sagas: require("../containers/Search").sagas,
      private: true,
    },
    "/kontakt": {
      key: "contact",
      container: require("../containers/Pages").default,
      reducer: require("../containers/Pages").reducer,
      sagas: require("../containers/Pages").sagas,
      private: false,
    },
    "/simplicity": {
      key: "simplicity",
      container: require("../containers/Pages").default,
      reducer: require("../containers/Pages").reducer,
      sagas: require("../containers/Pages").sagas,
      private: true,
    },
    "/anbieter": {
      key: "anbieter",
      container: require("../containers/Pages").default,
      reducer: require("../containers/Pages").reducer,
      sagas: require("../containers/Pages").sagas,
      private: true,
    },
    "/datenschutz": {
      key: "datenschutz",
      container: require("../containers/Pages").default,
      reducer: require("../containers/Pages").reducer,
      sagas: require("../containers/Pages").sagas,
      private: true,
    },
    "/impressum": {
      key: "impressum",
      container: require("../containers/Pages").default,
      reducer: require("../containers/Pages").reducer,
      sagas: require("../containers/Pages").sagas,
      private: true,
    },
    "/elements": {
      key: "pages",
      container: require("../containers/Pages").default,
      sagas: require("../containers/Pages").sagas,
      reducer: require("../containers/Pages").reducer,
      private: false,
    },
    "/page/:id": {
      key: "pages",
      container: require("../containers/Pages").default,
      sagas: require("../containers/Pages").sagas,
      reducer: require("../containers/Pages").reducer,
      private: false,
    },
    "/profile": {
      key: "userprofile",
      title: "User Profile",
      container: require("../containers/UserProfile").default,
      reducer: require("../containers/UserProfile").reducer,
      sagas: require("../containers/UserProfile").sagas,
      private: true,
    },
    "/profile/:action": {
      key: "userprofile",
      title: "User Profile",
      container: require("../containers/UserProfile").default,
      reducer: require("../containers/UserProfile").reducer,
      sagas: require("../containers/UserProfile").sagas,
      private: true,
    },
    "/oauth-login": {
      key: "oauthlogin",
      title: "OAuth Login",
      container: require("../containers/OAuthLogin").default,
      reducer: require("../containers/OAuthLogin/redux").reducer,
      sagas: require("../containers/OAuthLogin/sagas").default,
      private: false,
    },

    // 404
    "/:whatever": {
      key: "notfound",
      container: require("../containers/NotFound").default,
    },
    "/:whatever/:whatever2": {
      key: "notfound",
      container: require("../containers/NotFound").default,
    },
    "/:whatever/:whatever2/:whatever3": {
      key: "notfound",
      container: require("../containers/NotFound").default,
    },
    "/:whatever/:whatever2/:whatever3/:whatever4": {
      key: "notfound",
      container: require("../containers/NotFound").default,
    }

  }
}

export default routes