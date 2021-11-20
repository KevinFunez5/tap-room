import React from "react";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import KegDetail from "./KegDetail";

const 

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [
        {
          name: "King Crispy Pilsner",
          brand: "Deschutes",
          price: "$40",
          alchohol: "4.9",
          quantity: 100,
          id: v4()
        }
      ],
      selectedKeg: null
    };
  };

  handleClick = () => {
    if (this.state.selectedKeg !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({mainKegList: newMainKegList,
    formVisibleOnPage: false});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  } 

  handleSellingSelectedPint = (id) => {
    let selectedSoldPint = this.state.mainKegList.filter(keg => keg.id === id)[0];
    selectedSoldPint = selectedSoldPint.quantity--;
    this.setState({selectedSoldPint: selectedSoldPint});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg !== null) {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} />
      buttonText = "Return to Keg List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList}/>
      buttonText - "Return to List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList}
      onKegSelection={this.handleChangingSelectedKeg}
      onSoldPint={this.handleSellingSelectedPint}/>
      buttonText = "Add a new keg";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;