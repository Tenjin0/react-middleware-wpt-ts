import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import AppFieldSet from "./common/fieldset"
import { ICashDrawerContainerProps } from '../containers/cashdrawer';
import { RWMEnum, cashdrawer, CashDrawer } from '@wynd/redux-wps-middleware';

export default class CashDrawerComponent extends React.Component<ICashDrawerContainerProps, null> {

	constructor(props: ICashDrawerContainerProps) {

		super(props)


	}

	public componentDidMount() {

		cashdrawer.on("started", () => {
			console.log("started")
			cashdrawer.getCashdrawers()
		})
		cashdrawer.on("opened", () => {
			console.log("opened");
		})
	}

	public cashdrawers() {

		return this.props.cashdrawers.map((cashdrawer: CashDrawer.ICashDrawer) => (
			<li key={"cashdrawer-" + cashdrawer.id} id={"cashdrawer-" + cashdrawer.id}> {cashdrawer.id}: {cashdrawer.status}</li>
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
