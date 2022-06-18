import React, { useEffect, useState, useCallback } from 'react'
import { NavBar } from '../components/NavBar'
import { FooterContainer } from '../container/common/FooterContainer'
// import { Props } from './CommunityPage.type'
import { locations } from '../locations'
// import { Loader, Page } from 'decentraland-ui'
import { useHistory } from "react-router-dom";
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CallHistoryMethodAction, push } from 'connected-react-router'
import { Wallet } from 'decentraland-dapps/dist/modules/wallet/types'
import { isLoadingType } from 'decentraland-dapps/dist/modules/loading/selectors'
import { Proposal, ProposalsFetchParams } from '../modules/proposal/types'
import { RootState } from '../modules/reducer'
import {
  fetchProposalsRequest,
  FetchProposalsRequestAction,
  FETCH_PROPOSALS_REQUEST,
} from '../modules/proposal/actions'
import {
  getData as getProposals,
  getLoading as getProposalLoading,
} from '../modules/proposal/selectors'
import { getWallet, isConnecting } from '../modules/wallet/selectors'

type Props = {
  wallet: Wallet | null
  proposals: Record<string, Proposal>
  onFetchProposals: typeof fetchProposalsRequest
  onNavigate: (path: string) => void
  isLoading: boolean
  isConnecting: boolean
}

type MapStateProps = Pick<
  Props,
  'isLoading' | 'wallet' | 'isConnecting' | 'proposals'
>
export type MapDispatchProps = Pick<Props, 'onFetchProposals' | 'onNavigate'>
export type MapDispatch = Dispatch<
  FetchProposalsRequestAction | CallHistoryMethodAction
>

const PollPage = (props: Props) => {

  // const {
  //   proposals,
  //   wallet,
  //   isLoading,
  //   onFetchProposals,
  //   onNavigate,
  // } = props

  // useEffect(() => {
  //   const option: ProposalsFetchParams = {
  //     first: 5,
  //     skip: 0,
  //     state:''
  //   }
  //   onFetchProposals(option)
  // }, [onFetchProposals])

  console.log('====================================');
  console.log(props);
  console.log('====================================');


  return (
    <>
      {
        
      }

      {/* <FooterContainer /> */}
    </>
  )
}
// const mapStateToProps = (state: RootState): MapStateProps => {
//   const proposals = getProposals(state)
//   return {
//     wallet: getWallet(state),
//     proposals: proposals,
//     isConnecting: isConnecting(state),
//     isLoading: isLoadingType(
//       getProposalLoading(state),
//       FETCH_PROPOSALS_REQUEST
//     ),
//   }
// }

// const mapDispatchToProps = (dispatch: MapDispatch): MapDispatchProps => ({
//   onFetchProposals: (option: ProposalsFetchParams) =>
//     dispatch(fetchProposalsRequest(option)),
//   onNavigate: (path: string) => dispatch(push(path)),
// })


// const mapState = (state: RootState): MapStateProps => {
//   const proposals = getProposals(state)
//   return {
//     wallet: getWallet(state),
//     proposals: proposals,
//     isConnecting: isConnecting(state),
//     isLoading: isLoadingType(
//       getProposalLoading(state),
//       FETCH_PROPOSALS_REQUEST
//     ),
//   }
// }

// const mapDispatch = (dispatch: MapDispatch): MapDispatchProps => ({
//   onFetchProposals: (option: ProposalsFetchParams) =>
//     dispatch(fetchProposalsRequest(option)),
//   onNavigate: (path: string) => dispatch(push(path)),
// })


// export default connect(mapStateToProps, mapDispatchToProps)(PollPage)

export default PollPage