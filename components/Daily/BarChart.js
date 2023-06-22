import { BarChart } from "react-native-gifted-charts";
        
const BarApp = () => {
    const barData = [{value: 15}, {value: 30}, {value: 26}, {value: 40}];
    return <BarChart data={barData}/>;
};

export {BarApp}