import { Service } from "typedi";
import postDataApi from "@src/features/postData/postDataApi";
import { TempAndHumiDto } from "@src/dto/sensorData.dto";

@Service()
export default class postService {
    public async postData(data: TempAndHumiDto): Promise<JSON>{
        const result = await postDataApi.postData(data);
        return await result.data;
    }
}