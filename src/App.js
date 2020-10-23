import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HelmetMetaData from "./helmetComponent";
import Popper from "@material-ui/core/Popper";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon
} from "react-share";
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <HelmetMetaData></HelmetMetaData>
        <Switch>
          <Route path="/about" component={AboutUs} />
          <Route path="/blogs" component={Blog} />
        </Switch>
        <Popper className={classes.socialMediaPopper} open={true} transition>
          <FacebookShareButton
            url={"http://www.camperstribe.com"}
            quote={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}
          >
            <FacebookIcon size={36} />
          </FacebookShareButton>
          <TwitterShareButton
            url={"http://www.camperstribe.com"}
            title={"CampersTribe - World is yours to explore"}
            hashtag="#camperstribe"
            className={classes.socialMediaButton}
          >
            <TwitterIcon size={36} />
          </TwitterShareButton>
          <WhatsappShareButton
            url={"http://www.camperstribe.com"}
            title={"CampersTribe - World is yours to explore"}
            separator=":: "
          >
            <WhatsappIcon size={36} />
          </WhatsappShareButton>
        </Popper>
      </div>
    );
  }
}
export default App;
