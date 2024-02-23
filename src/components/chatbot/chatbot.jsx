import React from "react";
import "./chatbot.css";

export default function Chatbot() {
  return (
    <div className="chatbot_main">
      <div className="chatbot">
        <div className="rachel_avatar"></div>
        <div className="rachel_title">Hi, I'm Rachel. How Can I Help?</div>
        <div className="rachel_selections">
          <div className="rachel_selections_selct" value="buyHome">
            <p>I'm looking to buy a home</p>
            <div className="rachel_arrowbox rachel_arrowbox_select">
              <svg
                t="1708723991324"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9379"
                width="20"
                height="20"
              >
                <path
                  d="M653.248 727.296L608 682.048l149.024-149.056H192v-64h564.992L608 320l45.248-45.248 226.272 226.24z"
                  fill="#ffffff"
                  p-id="9380"
                ></path>
              </svg>
            </div>
          </div>
          <div className="rachel_selections_selct" value="refinance">
            <p>I'm looking to refinance my home</p>
            <div className="rachel_arrowbox rachel_arrowbox_select">
              <svg
                t="1708723991324"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9379"
                width="20"
                height="20"
              >
                <path
                  d="M653.248 727.296L608 682.048l149.024-149.056H192v-64h564.992L608 320l45.248-45.248 226.272 226.24z"
                  fill="#ffffff"
                  p-id="9380"
                ></path>
              </svg>
            </div>
          </div>
          <div className="rachel_selections_selct" value="cashOut">
            <p>I'm looking to take cash out</p>
            <div className="rachel_arrowbox rachel_arrowbox_select">
              <svg
                t="1708723991324"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="9379"
                width="20"
                height="20"
              >
                <path
                  d="M653.248 727.296L608 682.048l149.024-149.056H192v-64h564.992L608 320l45.248-45.248 226.272 226.24z"
                  fill="#ffffff"
                  p-id="9380"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="rachel_preapprovalSelections">
          <div>
            <div style={{ fontWeight: "600" }}>Instant Prequal Letter</div>
            <div style={{ fontWeight: "300" }}>
              I'm looking to get a 2 minutes prequalification Letter
            </div>
          </div>
          <div className="rachel_arrowbox">
            <svg
              t="1708723991324"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="9379"
              width="20"
              height="20"
            >
              <path
                d="M653.248 727.296L608 682.048l149.024-149.056H192v-64h564.992L608 320l45.248-45.248 226.272 226.24z"
                fill="#481970"
                p-id="9380"
              ></path>
            </svg>
          </div>
        </div>
        <div className="rachel_inputContainer">
          <label class="custom_file_upload">
            <input type="file" style={{ display: "none" }} />
            <svg
              t="1708728039216"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="16361"
              width="30"
              height="30"
            >
              <path
                d="M753.2 201.8v516.9c0 83.4-50.4 241.2-241.2 241.2-190.8 0-241.2-157.8-241.2-241.2V236.3c0-4.4 0.6-43.7 20.9-84.3 28.3-56.8 82.2-88 151.4-88 69.4 0 123.1 31.2 151.4 88 20.3 40.5 20.9 79.9 20.9 84.3v448c0 41.6-27.5 103.4-103.4 103.4-75.8 0-103.4-61.8-103.4-103.4V374.2c0-19 15.5-34.5 34.5-34.5 19.1 0 34.5 15.5 34.5 34.5v310.2c0.4 15.5 6.7 34.5 34.5 34.5s34.1-19 34.5-34.8V236.3c-0.2-17.1-6.1-103.4-103.4-103.4-43.7 0-73 16.3-89.8 49.9-13 26-13.6 53.3-13.6 53.5v482.5c0.2 17.6 6.1 172.3 172.3 172.3 170.4 0 172.3-165.3 172.3-172.3v-517c0-19 15.5-34.5 34.5-34.5 18.9 0.1 34.3 15.5 34.3 34.5z"
                p-id="16362"
                fill="#191970"
              ></path>
            </svg>
          </label>
          <textarea
            // rows="1"
            cols="50"
            id="chatbotInput"
            name="chatbotInput"
            placeholder="How can I help?"
          ></textarea>
          <div className="chatbot_inputButtons chatbot_reloadButtn">
            <svg
              t="1708727483003"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="13205"
              width="30"
              height="30"
            >
              <path
                d="M471 419.59a36.83 36.83 0 0 1-26.47-62.43l82.79-85.74-85.74-82.86a36.83 36.83 0 0 1 51.21-52.94l104.12 100.55a48.1 48.1 0 0 1 0.94 68.26L497.51 408.36A36.59 36.59 0 0 1 471 419.59zM545.63 289c0.14 0.07 0.22 0.22 0.29 0.29z m-0.5-36l-0.36 0.36z"
                fill="#252577"
                p-id="13206"
              ></path>
              <path
                d="M512 898.69c-185.79 0-336.91-151.12-336.91-336.91S326.25 224.88 512 224.88a36.83 36.83 0 0 1 0 73.65c-145.15 0-263.25 118.1-263.25 263.25S366.89 825 512 825s263.18-118.1 263.18-263.25a36.83 36.83 0 0 1 73.65 0c0.04 185.82-151.08 336.94-336.83 336.94z"
                fill="#252577"
                p-id="13207"
              ></path>
            </svg>
          </div>
          <div className="chatbot_inputButtons chatbot_sentButtn">
            <svg
              t="1708727533633"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="14451"
              width="20"
              height="20"
            >
              <path
                d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936L0 0l1024 512z"
                fill="#ffffff"
                p-id="14452"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
