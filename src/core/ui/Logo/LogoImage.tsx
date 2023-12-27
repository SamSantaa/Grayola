import classNames from 'clsx';

const LogoImage: React.FCC<{
  className?: string;
}> = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  width="208px" height='52px' viewBox="0 0 351.292 109.807">
  <defs>
    <clipPath id="clip-path">
      <path id="Trazado_3225" data-name="Trazado 3225" d="M3379.711,494.029q1.158-13.9,15.642-14.426,11.008,1.681,12.167,11.413V500.4q-1.16,8.691-12.167,10.429-15.064-.579-15.642-16.8m27.81-22.537q-4.057-4.692-13.905-5.272-13.326,0-20.568,8.111t-7.242,20.857q0,13.326,6.663,21.147t19.988,7.821a23.351,23.351,0,0,0,15.064-5.214v2.9a15.538,15.538,0,0,1-3.274,9.56q-3.274,4.344-12.543,4.345a28.827,28.827,0,0,1-15.469-5.214l-7.532,8.691q9.27,9.269,26.072,9.617l3.476-.348a24.84,24.84,0,0,0,18.25-8.632q7.241-8.169,7.242-20.336V467.958l-16.222-1.738Z" transform="translate(-3365.806 -466.22)" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-2">
      <path id="Trazado_3226" data-name="Trazado 3226" d="M3537.2,467.8v56.256h16.223V488.425q3.939-8.169,9.849-8.574,5.272.173,8.111,2.723l2.549-15.991a30.123,30.123,0,0,0-5.388-.464,20.294,20.294,0,0,0-15.121,6.373v-6.431Z" transform="translate(-3537.203 -466.061)" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <path id="Trazado_3227" data-name="Trazado 3227" d="M3657.012,503.879q.579-6.953,11.008-8.111,8.69,0,11.008,4.461v6.547q-2.318,4.578-11.008,4.577-10.428-.578-11.008-7.474m-9.85-30.706,6.373,9.849q5.793-3.476,16.222-3.476,9.154.579,9.27,6.952v1.738q-7.126-3.476-12.746-3.476-12.225,0-17.7,6.372a21.618,21.618,0,0,0-5.476,14.484q0,8.691,5.793,13.615t17.382,4.924q5.677,0,12.746-4.635v4.635h16.222V489.395q0-11.586-6.084-17.381t-16.512-5.794q-14.485,0-25.492,6.953" transform="translate(-3643.107 -466.22)" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-4">
      <path id="Trazado_3228" data-name="Trazado 3228" d="M3836.283,466.22v37.89q-3.824,5.969-8.921,6.315-5.853-.173-8.749-3.361t-2.9-8.98V466.22h-16.223v35.921a22.707,22.707,0,0,0,5.794,15.353q5.793,6.663,16.8,6.663a21.141,21.141,0,0,0,14.194-5.272v2.955q0,6.952-3.273,10.718t-10.805,3.766q-6.2-.58-13.151-5.794l-7.532,8.691q9.849,9.269,22.016,9.617l3.476-.348a25.234,25.234,0,0,0,17.96-8.632q7.531-8.169,7.532-20.336v-53.3Z" transform="translate(-3799.494 -466.22)" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <path id="Trazado_3229" data-name="Trazado 3229" d="M3976.119,505.27a16.9,16.9,0,0,1,0-22.1,15.105,15.105,0,0,1,21.436,0,16.9,16.9,0,0,1,0,22.1,15.175,15.175,0,0,1-21.436,0m-10.312-32.184q-8.461,8.459-8.458,21.089a29.827,29.827,0,0,0,50.636,21.089q8.459-8.459,8.458-21.089a29.826,29.826,0,0,0-50.636-21.089" transform="translate(-3957.348 -464.627)" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-6">
      <rect id="Rectángulo_220" data-name="Rectángulo 220" width="16.222" height="86.905" fill="#132b4f"/>
    </clipPath>
    <clipPath id="clip-path-7">
      <path id="Trazado_3230" data-name="Trazado 3230" d="M4202.5,503.879q.58-6.953,11.009-8.111,8.691,0,11.008,4.461v6.547q-2.317,4.578-11.008,4.577-10.429-.578-11.009-7.474m-9.849-30.706,6.374,9.849q5.793-3.476,16.222-3.476,9.155.579,9.271,6.952v1.738q-7.126-3.476-12.746-3.476-12.226,0-17.7,6.372a21.616,21.616,0,0,0-5.475,14.484q0,8.691,5.793,13.615t17.381,4.924q5.678,0,12.746-4.635v4.635h16.222V489.395q0-11.586-6.083-17.381t-16.512-5.794q-14.484,0-25.493,6.953" transform="translate(-4188.594 -466.22)" fill="#132b4f"/>
    </clipPath>
  </defs>
  <g id="Grupo_10895" data-name="Grupo 10895" transform="translate(-4750.052 14028.455)">
    <g id="Grupo_10265" data-name="Grupo 10265" transform="translate(4750.052 -14001.267)">
      <g id="Grupo_9308" data-name="Grupo 9308" transform="translate(0 0)" clip-path="url(#clip-path)">
        <rect id="Rectángulo_214" data-name="Rectángulo 214" width="99.387" height="99.387" transform="matrix(0.707, -0.707, 0.707, 0.707, -41.309, 41.309)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10264" data-name="Grupo 10264" transform="translate(4812.368 -14000.504)">
      <g id="Grupo_9310" data-name="Grupo 9310" clip-path="url(#clip-path-2)">
        <rect id="Rectángulo_215" data-name="Rectángulo 215" width="66.982" height="66.982" transform="translate(-28.997 28.997) rotate(-45)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10260" data-name="Grupo 10260" transform="translate(4850.873 -14000.448)">
      <g id="Grupo_9312" data-name="Grupo 9312" transform="translate(0 0)" clip-path="url(#clip-path-3)">
        <rect id="Rectángulo_216" data-name="Rectángulo 216" width="77.839" height="77.839" transform="translate(-28.969 28.968) rotate(-45)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10259" data-name="Grupo 10259" transform="translate(4907.732 -14001.267)">
      <g id="Grupo_9314" data-name="Grupo 9314" transform="translate(0 0)" clip-path="url(#clip-path-4)">
        <rect id="Rectángulo_217" data-name="Rectángulo 217" width="95.905" height="95.905" transform="matrix(0.707, -0.707, 0.707, 0.707, -41.309, 41.309)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10261" data-name="Grupo 10261" transform="translate(4965.125 -14001.028)">
      <g id="Grupo_9316" data-name="Grupo 9316" transform="translate(0 0)" clip-path="url(#clip-path-5)">
        <rect id="Rectángulo_218" data-name="Rectángulo 218" width="83.573" height="83.573" transform="translate(-29.548 29.548) rotate(-45)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10262" data-name="Grupo 10262" transform="translate(5028.6 -14028.455)">
      <g id="Grupo_9318" data-name="Grupo 9318" transform="translate(0 0)" clip-path="url(#clip-path-6)">
        <rect id="Rectángulo_219" data-name="Rectángulo 219" width="72.922" height="72.922" transform="translate(-43.453 43.453) rotate(-45)" fill="#132b4f"/>
      </g>
    </g>
    <g id="Grupo_10263" data-name="Grupo 10263" transform="translate(5049.201 -14000.448)">
      <g id="Grupo_9320" data-name="Grupo 9320" transform="translate(0 0)" clip-path="url(#clip-path-7)">
        <rect id="Rectángulo_221" data-name="Rectángulo 221" width="77.838" height="77.838" transform="translate(-28.969 28.968) rotate(-45)" fill="#132b4f"/>
      </g>
    </g>
  </g>
</svg>
  );
};

export default LogoImage;
