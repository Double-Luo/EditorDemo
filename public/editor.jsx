const React = require('react');  
const ReactDOM = require('react-dom');  
const CodeBox = require('./codebox');

// 在input中获得文件e.target.files[0]
class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
    }

    onFile(e) {
        this.setState({file:e.target.files[0].path});
    }

    render() {
        return <div className="editor">
            <div className="actions">
                <button className="cyan openbutton">
                    <label><input type="file" accept=".js" onChange={this.onFile.bind(this)} /></label>
                    打开
                </button>
                <button className="blue" onClick={() => {
                    this.refs.codebox.save()
                }}>保存</button>
            </div>
            <CodeBox file={this.state.file} ref="codebox" />
        </div>;
    }
}

module.exports = Editor;

