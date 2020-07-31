import React from "react";
import { Box, Tab, Tabs, Typography } from "@material-ui/core";

interface AppState {
  activeTab: number;
}

class App extends React.Component<object, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      activeTab: 0,
    };
  }

  setActiveTab = (event: any, activeTab: number) => {
    this.setState({
      activeTab,
    });
  };

  render() {
    return (
      <div>
        <Tabs value={this.state.activeTab} onChange={this.setActiveTab}>
          <Tab label="Home" value={0} />
          <Tab label="About" value={1} />
          <Tab label="Skills" value={2} />
          <Tab label="Experience" value={3} />
          <Tab label="Projects" value={4} />
          <Tab label="Contact" value={5} />
        </Tabs>
        <Box>
          <Typography variant="h2" style={{ margin: 20 }}>
            Howdy! I'm Andrew
          </Typography>
        </Box>
      </div>
    );
  }
}

export default App;
