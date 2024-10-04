import { GrLinkedin, GrGithub } from "react-icons/gr";

const SocialMedia = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="app__social">
      <div
        onClick={() =>
          openLink("https://www.linkedin.com/in/tazeem-khan-662a24207/")
        }
      >
        <GrLinkedin />
      </div>
      <div onClick={() => openLink("https://github.com/TazeemKhan-dev")}>
        <GrGithub />
      </div>
    </div>
  );
};

export default SocialMedia;
