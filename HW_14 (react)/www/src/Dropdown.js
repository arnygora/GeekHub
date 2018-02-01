import React from 'react';

class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpended: true
        }
    }

    toggleClick = () => {
        this.setState ({
            isOpended: !this.state.isOpended
        })
    }
    render() {
        console.log(this.state.isOpended)

        let DropdownContent;
        if (this.state.isOpended) {
            DropdownContent = (
                <p>Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Даже рукописи образ жаренные мир деревни за прямо но осталось запятой ipsum, путь страну подзаголовок великий она, рыбного семь не?</p>
            )
        }
        return (
            <div className="Dropdown">
                <h3 className="upper-text" onClick={this.toggleClick}>about us (Dropdown title)</h3>
                {DropdownContent}

            </div>
        );
    }
}

export default Dropdown;