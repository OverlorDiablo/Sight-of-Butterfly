import React from 'react'
import brandItems from './data'
import getAssetUrl from '@/helpers/getAssetUrl';
import styles from './cardBrandList.module.css'

export const CardBrandList: React.FC = () => {
  return (
    <div className={styles['pouring-paint']} >
      <h2>Список марок автомобилей</h2>

      <div className={styles['tech-doc__table']}>
        <table>
          <tbody>
            <tr>
              <th colSpan={5}>Название марок</th>
            </tr>
          </tbody>
          <tbody>
            {
              brandItems.map((row, index) => {
                return (
                  <tr key={index}>
                    {
                      row.map((brandItem) => {
                        return (
                          <td key={brandItem.id}>
                            <a
                              href={getAssetUrl(brandItem.pdfLink)}
                              target="_blank">
                              {brandItem.name}
                            </a>
                          </td>
                        )
                      })
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}