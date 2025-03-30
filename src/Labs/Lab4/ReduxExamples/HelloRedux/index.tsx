import { useSelector } from "react-redux";
export default function HelloRedux() {
    useSelector((state: any) => state.helloReducer);
    return (
        <div id="wd-hello-redux">
            <h3>Hello Redux</h3>
            <h4>Hello World</h4> <hr />
        </div>
    );
}