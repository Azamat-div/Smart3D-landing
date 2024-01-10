/* eslint-disable consistent-return */
import { useEffect, useState } from 'react';
import { getDataLocal, saveDataLocal } from '../../utils/functions';
import { ContextData, DataResponse, ImageResponse, InfoBlock, ResponseError } from '../../types';
import resRequest from '../resRequest';

export const useGetAllData: () => ContextData = () => {
  const [allData, setAllData] = useState<DataResponse>({});
  const [explanationData, setExplanationData] = useState<InfoBlock[]>([]);
  const [questionsData, setQuestionsData] = useState<InfoBlock[]>([]);

  const formExplanation = (data: DataResponse) => {
    const newExplanationData = [
      {
        title: data['landing.appFeatures.first.title'] as string,
        description: data['landing.appFeatures.first.description'] as string,
        id: 'question1',
      },
      {
        title: data['landing.appFeatures.second.title'] as string,
        description: data['landing.appFeatures.second.description'] as string,
        id: 'question2',
      },
      {
        title: data['landing.appFeatures.third.title'] as string,
        description: data['landing.appFeatures.third.description'] as string,
        id: 'question3',
      },
      {
        title: data['landing.appFeatures.fourth.title'] as string,
        description: data['landing.appFeatures.fourth.description'] as string,
        id: 'question4',
      },
      {
        title: data['landing.appFeatures.fifth.title'] as string,
        description: data['landing.appFeatures.fifth.description'] as string,
        id: 'question5',
      },
      {
        title: data['landing.appFeatures.sixth.title'] as string,
        description: data['landing.appFeatures.sixth.description'] as string,
        id: 'question6',
      },
    ];
    setExplanationData(newExplanationData);
  };

  const formQuestions = (data: DataResponse) => {
    let counter = 0;
    const newQuestionsData = [];
    while (data[`landing.questions.${counter}.title`]) {
      newQuestionsData.push({
        title: data?.[`landing.questions.${counter}.title`],
        description: data?.[`landing.questions.${counter}.description`],
        id: `question${counter}`,
      });
      counter += 1;
    }
    setQuestionsData(newQuestionsData);
  };

  const getAllData = async () => {
    const fieldName = 'main';
    const dataSave = getDataLocal(fieldName);
    // if (dataSave) {
    // }
    // const start = new Date();
    const obj = {
      action: 'interface.get',
      page: 1,
      page_size: 10000,
      filter: {
        PROPERTY_LANG: 'ru', // ru, en ..
        SECTION_CODE: 'landing',
        INCLUDE_SUBSECTIONS: 'Y',
      },
    };

    const response: ResponseError & Record<string, string | ImageResponse> = await resRequest(obj);
    if (!response || response.error || response.ERROR) {
      return;
    }
    // saveDataLocal(fieldName, '');
    formExplanation(response);
    formQuestions(response);
    setAllData(response);

    // alert(new Date().getTime() - start.getTime())
  };

  useEffect(() => {
    getAllData();
  }, []);

  return {
    allData,
    explanationData,
    questionsData,
  };
};

export default useGetAllData;
