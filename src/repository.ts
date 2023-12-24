import { getAllCustomerRecords, getAllUnreadCustomerRecords, setAllCustomerRecordsAsRead, setCustomerRecordsAsRead } from './api'
import { INotification } from './models'

/**
 *  Repository class to handle all the API calls
 */
export default class Repository {
  /**
   *
   * @param orgId
   * @returns
   */
  static async getAllCustomerRecords(orgId: number) {
    const response = (await getAllCustomerRecords(orgId)) as INotification[]
    // if (!response.ok) {
    //   throw new Error('Error getting all customer records')
    // }
    // const data = response.json()
    // return data
    return response
  }

  /**
   *
   * @param orgId
   * @returns
   */
  static async getAllUnreadCustomerRecords(orgId: number) {
    const response = await getAllUnreadCustomerRecords(orgId)
    // if (!response.ok) {
    //   throw new Error('Error getting all unread customer records')
    // }
    // const data = response.json()
    // return data
    return response
  }

  /**
   *
   * @param orgId
   * @returns
   */
  static async setAllCustomerRecordsAsRead(orgId: number) {
    const response = await setAllCustomerRecordsAsRead(orgId)
    // if (!response.ok) {
    //   throw new Error('Error settings all customer records as unread')
    // }
    // const data = response.json()
    // return data
    return response
  }
  /**
   *
   * @param orgId
   * @param recordsId
   * @returns
   */
  static async setCustomerRecordsAsRead(orgId: number, recordsId: string[]) {
    const response = await setCustomerRecordsAsRead(orgId, recordsId)
    // if (!response.ok) {
    //   throw new Error('Error settings customer records as unread')
    // }
    // const data = response.json()
    // return data
    return response
  }
}
