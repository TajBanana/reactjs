import ChartBar from './ChartBar'
import './Chart.css'

const Chart = (props) => {
    return <div className="chart">
        {props.dataPoints
            .map(dataPoint => <ChartBar value={dataPoint.value}
                                        maxValue={null}
                                        key={dataPoint.id}
                                        label={dataPoint.label}/>
            )}
    </div>
}