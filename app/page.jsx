import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Create & Share
      <br className="max-md:hidden" />
      <span className="blue_gradient text-center"> AI Prompts</span>
    </h1>
    <p className="desc text-center">
      Prompt Social is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
