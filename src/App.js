import './App.css';
import React from 'react';
import creaturesArray from './data.js';
import CreatureHeader from './Header/Header.js';
import CreatureList from './Creatures/CreatureList.js';

export default class App extends React.Component {
  state = {
    keyword: '',
  }

  render() {
    const filteredCreatures = creaturesArray.filter((creature) => {
      if (!this.state.keyword) return true;
      if (creature.keyword === this.state.keyword) return true;
      return false;
    });

    return (
      <div className="App">

        <CreatureHeader />

        <main className="creatureMain">

          <div className="creatureGallery">

            <CreatureList filteredCreatures={filteredCreatures} />

          </div>

          <div className="creatureFilter">
            <form className="creatureForm">
              pick some cuties
                <select
                className="creatureSelect"
                value={this.state.keyword}
                onChange={(e) => {
                  this.setState({
                    keyword: e.target.value
                  })
                }}
              >
                <option value="">all</option>
                <option value="addax">addax</option>
                <option value="chameleon">chameleon</option>
                <option value="dragon">dragon</option>
                <option value="lizard">lizard</option>
                <option value="markhor">markhor</option>
                <option value="mouflon">mouflon</option>
                <option value="narwhal">narwhal</option>
                <option value="rhino">rhino</option>
                <option value="triceratops">triceratops</option>
                <option value="unicorn">unicorn</option>
                <option value="unilego">unilego</option>
              </select>
            </form>

          </div>

        </main>

      </div>
    )
  }
}