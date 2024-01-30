import useDrawStore from '@/store/draw'

const PointCountConfig = () => {
  const { shapeLinePointCount, updateShapeLinePointCount } = useDrawStore()

  return (
    <div className="mt-3">
      <div className="font-bold text-base font-fredokaOne">Point Count</div>
      <input
        type="range"
        min="2"
        max="6"
        value={shapeLinePointCount}
        className="range range-primary range-xs"
        step="1"
        onChange={(e) => updateShapeLinePointCount(Number(e.target.value))}
      />
      <div className="w-full flex justify-between text-xs px-2 font-fredokaOne">
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
    </div>
  )
}

export default PointCountConfig
