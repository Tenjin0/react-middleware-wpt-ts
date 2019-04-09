import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { ICashDrawerContainerProps } from '../containers/cashdrawer';
import { RWMEnum, cashdrawer, CashDrawer } from '@wynd/redux-wps-middleware';

interface ICashDrawerComponentProps {
	canCall: boolean
}

export default class CashDrawerComponent extends React.Component<ICashDrawerContainerProps, ICashDrawerComponentProps> {

	constructor(props: ICashDrawerContainerProps) {

		super(props)

		this.state = {
			canCall : false
		}

	}

	public componentWillReceiveProps(nextProps : ICashDrawerContainerProps) {

		if (! this.state.canCall && nextProps.initialized) {
			this.setState({
				...this.state,
				canCall: true
			})
			cashdrawer.getCashdrawers()

		}
	}

	public componentDidMount() {
	}

	public cashdrawers() {
		return this.props.cashdrawers.map((cashdrawer: CashDrawer.ICashDrawer) => (
			<li id={"cashdrawer-" + cashdrawer.id}> {cashdrawer.status}</li>
		))
	}
	public render() {

		return (
			<AppFieldSet name={this.props.name} started={this.props.initialized} status={RWMEnum.ERequestStatus.NONE}>
				<ul>
					{
						this.cashdrawers()
					}
				</ul>
			</AppFieldSet>

		);
	}
}
