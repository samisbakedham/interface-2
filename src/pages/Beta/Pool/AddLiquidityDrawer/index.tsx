import React from 'react'
import Drawer from 'src/components/Drawer'
import { Token } from '@pangolindex/sdk'
import { useTranslation } from 'react-i18next'
import { unwrappedToken } from 'src/utils/wrappedCurrency'
import AddLiquidity from '../EarnWidget/AddLiquidity'

type Props = {
  isOpen: boolean
  clickedLpTokens: Array<Token>
  onClose: () => void
  backgroundColor?: string
}

const AddLiquidityDrawer: React.FC<Props> = ({ isOpen, onClose, clickedLpTokens, backgroundColor }) => {
  const { t } = useTranslation()

  const token0 = clickedLpTokens?.[0]
  const token1 = clickedLpTokens?.[1]

  const currencyA = token0 && unwrappedToken(token0)
  const currencyB = token1 && unwrappedToken(token1)

  return (
    <Drawer title={t('pool.addLiquidity')} isOpen={isOpen} onClose={onClose} backgroundColor={backgroundColor}>
      {isOpen && <AddLiquidity currencyA={currencyA} currencyB={currencyB} onComplete={onClose} type="card" />}
    </Drawer>
  )
}

export default AddLiquidityDrawer
