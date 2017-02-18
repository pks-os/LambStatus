import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMetrics, deleteMetric } from 'actions/metrics'
import Metrics from 'components/Metrics'

const mapStateToProps = (state) => {
  return {
    metrics: state.metrics.metrics
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({fetchMetrics, deleteMetric}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Metrics)
