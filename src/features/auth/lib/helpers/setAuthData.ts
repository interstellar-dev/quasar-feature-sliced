import { JwtToken } from '@shared/api';
import { jwt, transformRawDataToViewerData } from '@shared/api/bakery';
import { viewerModel } from '@entities/viewer';
import { authModel } from '@features/auth';
import { Ref } from 'vue'

export const setAuthData = (data: Ref<JwtToken>, remember:boolean) => {
  const viewerStore = viewerModel.store()
  const authStore = authModel.store()

  jwt.setToken(data.value, remember)
  authStore.setToken(data.value.jwt)

  // @ts-ignore
  viewerStore.setViewer(transformRawDataToViewerData(data.value.user))
}
