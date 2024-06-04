/** @format */

import { createClient } from "contentful-management";

class Contentful {
  constructor(accessToken, spaceID) {
    this._accessToken = accessToken;
    // this._database = database;
    this._contentfulClient = createClient({
      accessToken: accessToken,
    });
    this._spaceID = spaceID;
    // console.log("here in Contentful class constructor");
  }

  async downloadFile(email, fileURL) {
    // call API
    this._contentfulClient
      .getSpace(this._spaceID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.createEntry("leadMagnetDownloadEntry", {
          fields: {
            email: {
              "en-US": email,
            },
            fileUrl: {
              "en-US": fileURL,
            },
          },
        })
      )
      .then((entry) => {
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = "WiserGates - Personal Balance Sheet Template";
        document.body.appendChild(link);
        link.click();
      })
      .catch(console.error);
  }
  async contactRequest(name, email, phone, company, reason) {
    this._contentfulClient
      .getSpace(this._spaceID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.createEntry("masterclassRequest", {
          fields: {
            name: {
              "en-US": name,
            },
            email: {
              "en-US": email,
            },
            phone: {
              "en-US": phone,
            },
            company: {
              "en-US": company,
            },
            reason: {
              "en-US": reason,
            },
          },
        })
      )
      .then((entry) => {
        // console.log(entry);
        return entry;
      })
      .catch((err) => {
        // console.log(err);
        throw error;
      });
  }
  async meetingRequest(name, email, phone, age) {
    this._contentfulClient
      .getSpace(this._spaceID)
      .then((space) => space.getEnvironment("master"))
      .then((environment) =>
        environment.createEntry("oneOnOneMeetingRequest", {
          fields: {
            name: {
              "en-US": name,
            },
            email: {
              "en-US": email,
            },
            phone: {
              "en-US": phone,
            },
            age: {
              "en-US": age,
            },
          },
        })
      )
      .then((entry) => {
        // console.log(entry);
        return entry;
      })
      .catch((err) => {
        // console.log(err);
        throw error;
      });
  }
}

export default Contentful;
