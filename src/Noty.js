import Noty from "noty";

import "../node_modules/noty/lib/themes/relax.css";
import "../node_modules/noty/lib/noty.css";

export const showSuccessNotification = (msg) => {
  new Noty({
    theme: "relax",
    text: `${msg}`,
    type: "success",
    layout: "topRight",
    timeout: 2500,
  }).show();
};

export const showerrorNotification = (msg) => {
  new Noty({
    theme: "relax",
    text: `${msg}`,
    type: "error",
    layout: "topRight",
    timeout: 1500,
  }).show();
  console.log("in error noty");
};
