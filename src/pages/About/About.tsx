import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h3>This Project</h3>
      <div className="about-block">
        <p>The goal of this project is to develop a deep learning-based ransomware detection model and deploy it on a website, allowing users to upload and analyze files.</p>
      </div>
      <h3>Team Members</h3>
      <div className="about-block">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Yi-Xuan Wu</div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Ying-Shuan He</div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Pang-Po Cheng</div>
          </div>
        </div>
      </div>
      <h3>Project Advisor</h3>
      <div className="about-block">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Chin-Yu Sun</div>
          </div>
        </div>
      </div>
      <h3>Consultant</h3>
      <div className="about-block">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Sheng-Shan Chen</div>
          </div>
        </div>
        <div className="profile">
          <div className="profile-img"></div>
          <div className="profile-info">
            <div className="name">Han-Xuan Huang</div>
          </div>
        </div>
      </div>
    </div>
  );
}