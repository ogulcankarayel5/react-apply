import axios from 'axios';
import {API_BASE_ANSWER} from '../config/env';

export const POST_ANSWER_PENDING="POST_ANSWER_PENDING";
export const POST_ANSWER_FULFILLED="POST_ANSWER_FULFILLED";
export const POST_ANSWER_REJECTED="POST_ANSWER_REJECTED";

export function postAnswer(Id,ScenarioName,Answer,CandidateName,CandidateEmail){
    return dispatch => {
        dispatch({
            type:"POST_ANSWER",
            payload:axios.post(`${API_BASE_ANSWER}/answerapi`,{
                Id:Id,
                ScenarioName:ScenarioName,
                Answer:Answer,
                CandidateName:CandidateName,
                CandidateEmail:CandidateEmail
            }).then(result =>result)})}}