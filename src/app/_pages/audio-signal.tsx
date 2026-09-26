"use client";

import Link from "next/link";
import { SectionCard, PageHeader } from "../_components/section-card";
import { NextSteps } from "../_components/next-steps";
import { CodeBlock } from "../_components/code-block";
import { hrefFor } from "../_lib/router";
import { Badge } from "@/components/ui/badge";
import { DeeperThought, DeeperThoughtSection } from "../_components/deeper-thought";
import {
  AudioWaveform, Activity, Layers, GitBranch, BarChart3, Cpu, Music,
} from "lucide-react";

const KPIS = [
  { label: "CD sample rate / bit depth", value: "44.1 kHz / 16-bit", hint: "Stereo: 1,411 kbps uncompressed (PCM)", deltaTone: "flat" as const },
  { label: "MP3 @ 128 kbps compression ratio", value: "11:1", hint: "Perceptually transparent for 90% of listeners on most material", deltaTone: "flat" as const },
  { label: "MFCCs typically extracted", value: "13-40", hint: "Mel-frequency cepstral coefficients — first 13 capture most speech info", deltaTone: "flat" as const },
  { label: "Whisper-large-v3 parameters", value: "1.55B", hint: "Multilingual ASR — 99 languages, word error rate < 5% on Common Voice", deltaTone: "flat" as const },
];

const MFCC_PY = `# ============================================================
# MFCC extraction — Mel-frequency cepstral coefficients
# Free: OSS (BSD-3). pip install librosa numpy.
# ============================================================
import numpy as np
import librosa

# Load an audio file (any format: WAV, MP3, FLAC — librosa uses FFmpeg)
# Use a synthetic tone for demo: 440 Hz sine + harmonic, 3 seconds
sr = 22050
t = np.linspace(0, 3, 3 * sr, endpoint=False)
signal = (np.sin(2 * np.pi * 440 * t)
          + 0.5 * np.sin(2 * np.pi * 880 * t)
          + 0.25 * np.sin(2 * np.pi * 1320 * t))

# 1. Pre-emphasis (boost high frequencies — compensates for the -6 dB/octave
#    spectral roll-off of the vocal tract)
pre_emphasized = np.append(signal[0], signal[1:] - 0.97 * signal[:-1])

# 2. Framing — 25ms windows with 10ms hop (standard speech processing)
frame_length = int(0.025 * sr)   # 551 samples
hop_length = int(0.010 * sr)    # 220 samples

# 3. Hamming window + FFT + power spectrum
frames = librosa.util.frame(pre_emphasized, frame_length=frame_length, hop_length=hop_length)
windowed = frames * np.hamming(frame_length)[:, None]
power_spec = np.abs(np.fft.rfft(windowed, axis=0)) ** 2

# 4. Mel filterbank — 26 triangular filters spaced on the Mel scale
#    Mel(f) = 2595 * log10(1 + f / 700) — perceptually uniform pitch
mel_filters = librosa.filters.mel(sr=sr, n_fft=frame_length, n_mels=26)
mel_energies = mel_filters @ power_spec

# 5. Log + DCT — cepstral coefficients
log_mel = np.log(mel_energies + 1e-8)
mfcc = librosa.feature.mfcc(S=log_mel, n_mfcc=13)

print(f"MFCC shape: {mfcc.shape}  (13 coefficients x {mfcc.shape[1]} frames)")
print(f"First 3 MFCCs (timbre, energy, pitch): {mfcc[:3, 0].round(2)}")
`;

const NMF_PY = `# ============================================================
# NMF source separation — split a stereo mix into vocals + drums + bass
# Free: OSS (BSD-3). pip install sklearn librosa.
# ============================================================
import numpy as np
from sklearn.decomposition import NMF
import librosa

# Load a stereo recording (use Spleeter's MUSDB18 sample for demo)
# y, sr = librosa.load("song.wav", sr=22050, mono=False)
# For demo: synthesize a 3-second "mix" of sine + sawtooth
sr = 22050
t = np.linspace(0, 3, 3 * sr, endpoint=False)
vocal = 0.6 * np.sin(2 * np.pi * 220 * t)          # "vocal" (220 Hz)
drums = 0.4 * np.sign(np.sin(2 * np.pi * 4 * t))   # "drums" (4 Hz clicks)
y = vocal + drums

# STFT — time-frequency representation (spectrogram)
S = np.abs(librosa.stft(y, n_fft=2048, hop_length=512))
print(f"Spectrogram shape: {S.shape}  (1025 freq bins x {S.shape[1]} frames)")

# NMF decomposition: S ≈ W @ H
# W (1025 x k): frequency basis vectors ("dictionary" of source spectra)
# H (k x T):    time activations (when each source is "on")
k = 4  # number of sources to extract
nmf = NMF(n_components=k, init="nndsvda", random_state=0, max_iter=500)
W = nmf.fit_transform(S)        # (1025, 4) — spectral templates
H = nmf.components_             # (4, T)    — temporal activations

print(f"W shape: {W.shape}  (frequency templates)")
print(f"H shape: {H.shape}  (time activations)")
print(f"Reconstruction error: {nmf.reconstruction_err_:.2f}")

# To separate: reconstruct each source independently + invert STFT
# S_vocals = W[:, 0:1] @ H[0:1, :]   # soft mask back into STFT domain
# vocals = librosa.istft(S_vocals)
`;

export function AudioSignalPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        eyebrow="Audio Signal Processing · MFCC + MP3 + NMF"
        title="Audio Signal Processing — codecs, MFCCs, and source separation"
        description="From the FFT that converts a time-domain waveform into a spectrogram, through the Mel-scale filterbank that extracts perceptually-uniform MFCC features, to the NMF decomposition that separates a song into vocals/drums/bass. This page is the audio home for the SVD and FFT living-equation cards — both algorithms are foundational to everything audio-related."
        right={
          <div className="flex gap-2">
            <Badge variant="outline" className="gap-1.5"><AudioWaveform className="h-3 w-3" /> FFT</Badge>
            <Badge variant="outline" className="gap-1.5"><Music className="h-3 w-3" /> MFCC</Badge>
            <Badge variant="outline" className="gap-1.5"><Layers className="h-3 w-3" /> NMF</Badge>
          </div>
        }
      />

      <SectionCard
        title="KPIs at a glance"
        description="Scale and quality of the modern audio processing stack."
        icon={<Activity className="h-5 w-5" />}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {KPIS.map((k) => (
            <div key={k.label} className="rounded-md border border-border/60 p-3 bg-muted/20">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{k.label}</p>
              <p className="text-lg font-semibold mt-1">{k.value}</p>
              <p className="text-[10px] text-muted-foreground mt-1">{k.hint}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard
        title="MFCCs — the universal speech/audio feature"
        description="13 numbers per 25ms frame that capture most of what you need for speech recognition, speaker ID, and music genre classification."
        icon={<Music className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80">Mel-frequency cepstral coefficients (MFCCs)</strong>{" "}
            are the workhorse feature of audio processing, used everywhere from
            classical speech recognisers (HMM-GMM, pre-2010) to modern speaker
            embeddings (x-vectors, ECAPA-TDNN). The recipe:
          </p>
          <ol className="list-decimal pl-5 space-y-1 ml-2 text-sm">
            <li>Frame the signal into 25ms windows with 10ms hop</li>
            <li>Apply a Hamming window + FFT to get the magnitude spectrum</li>
            <li>Filter through a Mel-scale filterbank (26 triangular filters spaced on the perceptual Mel scale)</li>
            <li>Take the log of the resulting 26 energies</li>
            <li>Apply a DCT (discrete cosine transform) — keeps the first 13 coefficients as the MFCCs</li>
          </ol>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The Mel scale (Stevens, Volkmann &amp; Newman 1937) is a perceptual
            pitch scale where equal distances sound equally-spaced to the human
            ear — it's roughly logarithmic above 500 Hz. This is why the filterbank
            is non-uniformly spaced: human hearing is much better at distinguishing
            200 Hz from 250 Hz than it is at distinguishing 4000 Hz from 4050 Hz.
            The Mel filterbank encodes that asymmetry.
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={MFCC_PY} language="python" filename="mfcc-extract.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="MP3 and AAC — psychoacoustic compression"
        description="How the 1,411 kbps CD stream becomes a 128 kbps MP3 that 90% of listeners can't distinguish from the original."
        icon={<Cpu className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            MP3 (MPEG-1 Audio Layer III, 1993) and AAC (Advanced Audio Coding,
            1997) achieve their 11:1 compression ratio by exploiting psychoacoustic
            masking — the fact that loud sounds hide quieter sounds at nearby
            frequencies. The encoder computes a psychoacoustic model that predicts
            which frequency components will be masked, then quantises those
            components more aggressively (or drops them entirely).
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The pipeline: Modified Discrete Cosine Transform (MDCT) → psychoacoustic
            model → quantisation + Huffman coding → bitstream. The MDCT is a
            variant of the FFT — it's a real-valued, lapped transform that
            eliminates blocking artefacts at frame boundaries. The same algorithm
            (FFT family) that powers the platform's <Link href={hrefFor("living-fft")} className="text-primary hover:underline">Living FFT</Link> page
            is doing the heavy lifting in every MP3 ever encoded.
          </p>
        </div>
      </SectionCard>

      <SectionCard
        title="NMF source separation — split a song into stems"
        description="Non-negative Matrix Factorisation on the spectrogram — the classical (pre-deep-learning) approach to separating vocals from a mix."
        icon={<Layers className="h-5 w-5" />}
      >
        <div className="prose prose-sm dark:prose-invert max-w-none space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <strong className="text-foreground/80">Non-negative Matrix Factorisation (NMF)</strong>{" "}
            decomposes a spectrogram S (frequency × time) into the product of
            two non-negative matrices: W (frequency × k) containing spectral
            templates ("dictionary" of source spectra) and H (k × time) containing
            time activations (when each source is "on"). With k = 4, the
            decomposition often finds: vocals, drums, bass, and "other" — the four
            stems that Spleeter and Demucs also predict.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            NMF was SOTA until ~2018, when deep learning approaches (U-Net
            spectrogram masking, Demucs time-domain) overtook it. The deep
            approaches give ~6 dB SDR improvement over NMF on the MUSDB18
            benchmark. But NMF is still useful: it's interpretable (you can
            see the spectral template for each source), needs no training data,
            and runs in milliseconds on a laptop. For an interactive demo, see
            Spleeter (Deezer, 2019).
          </p>
        </div>
        <div className="mt-4">
          <CodeBlock code={NMF_PY} language="python" filename="nmf-separation.py" />
        </div>
      </SectionCard>

      <SectionCard
        title="Speech recognition — from HMM-GMM to Whisper"
        description="The 30-year arc of automatic speech recognition."
        icon={<BarChart3 className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-3 gap-3">
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <GitBranch className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">1990-2010: HMM-GMM</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              MFCC + Hidden Markov Model with Gaussian Mixture emissions.
              Sphinx, HTK. Word error rate ~30% on read speech.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <Cpu className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">2010-2020: Hybrid DNN-HMM</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              Replace the GMM with a deep neural network (CD-DNN-HMM).
              Kaldi. WER dropped to ~10% on Switchboard.
            </p>
          </div>
          <div className="rounded-md border border-border/60 p-3 bg-muted/20">
            <AudioWaveform className="h-4 w-4 text-primary mb-2" />
            <p className="font-semibold text-sm">2020-now: Transformers</p>
            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
              End-to-end: Wav2Vec 2.0, Conformer, Whisper. WER &lt; 5% on
              Common Voice — 99 languages, 0 hand-engineered features.
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard
        title="Connections across the platform"
        description="How audio signal processing connects to the rest of the platform."
        icon={<Music className="h-5 w-5" />}
      >
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <Link href={hrefFor("living-fft")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living FFT</p>
            <p className="text-xs text-muted-foreground mt-1">The fundamental transform that underpins every audio algorithm on this page.</p>
          </Link>
          <Link href={hrefFor("living-svd")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living SVD</p>
            <p className="text-xs text-muted-foreground mt-1">NMF and SVD are cousins — both decompose a matrix into low-rank structure.</p>
          </Link>
          <Link href={hrefFor("transformer-deep-dive")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Transformer Deep Dive</p>
            <p className="text-xs text-muted-foreground mt-1">Whisper and Wav2Vec2 are transformers — same architecture as GPT but trained on audio.</p>
          </Link>
          <Link href={hrefFor("living-entropy")} className="rounded-md border border-border/60 p-3 hover:border-primary hover:bg-primary/5 transition-colors">
            <p className="font-semibold">→ Living Entropy</p>
            <p className="text-xs text-muted-foreground mt-1">Shannon entropy is the basis of MP3's Huffman coding step.</p>
          </Link>
        </div>
      </SectionCard>

      <DeeperThoughtSection pageTitle="Audio Signal Processing">
        <DeeperThought title="The FFT is the most-reused equation on this entire platform" connectedTo="FFT card + SVD card + Attention card">
          <p>{"The FFT appears in: audio (MFCC extraction), image processing (JPEG via DCT, a cousin of FFT), wireless (OFDM modulation in 5G/WiFi), radar (Doppler processing), quantum computing (QFT in Shor's algorithm), molecular dynamics (calculating the electrostatic potential via Ewald summation), and even finance (Black-Scholes via FFT-based characteristic functions). No other equation on the platform is reused across so many domains. This is why FFT was the #1 priority when we built the Living Equations suite — and why the FFT card has the densest cousin graph in the elegant-code deck."}</p>
        </DeeperThought>
        <DeeperThought title="Deep learning didn't kill classical audio DSP — it absorbed it" connectedTo="Whisper + Wav2Vec2">
          <p>{"Whisper-large-v3 doesn't compute MFCCs — it takes the raw waveform and learns its own filterbank in the first conv layer. But that learned filterbank, when you visualise it, looks remarkably like a Mel filterbank. The same is true for Wav2Vec 2.0 and HuBERT. Deep learning rediscovered what 50 years of psychoacoustic research had already established: log-scaled frequency is the right representation for audio. The Mel scale wasn't an arbitrary choice — it was an empirical discovery about human hearing, and it turns out the same representation works for machines. The lesson: classical DSP knowledge transfers even when the algorithm stack changes."}</p>
        </DeeperThought>
        <DeeperThought title="NMF's interpretability is why it survived the deep learning revolution" connectedTo="NMF + SVD card">
          <p>{"NMF is no longer SOTA on any benchmark — Demucs, Spleeter, and HTDemucs all beat it by 6+ dB SDR. But NMF is still used in production for: keyword spotting (the 4-word wake-word on your phone), music recommendation (Spotify's track similarity features), and forensic audio enhancement (cleaning up wiretap recordings). The reason is interpretability: with NMF, you can point to a specific W column and say 'this is the spectral template of the vocal'. With a U-Net, you can't. In domains where you need to justify your output (court cases, regulatory review), the 6 dB accuracy hit is worth the interpretability gain."}</p>
        </DeeperThought>
      </DeeperThoughtSection>

      <NextSteps relatedPages={[
        { id: "living-fft", reason: "The fundamental transform underlying every audio algorithm" },
        { id: "living-svd", reason: "NMF is SVD's cousin — both extract low-rank structure" },
        { id: "transformer-deep-dive", reason: "Whisper and Wav2Vec2 — transformers for audio" },
        { id: "living-entropy", reason: "Huffman coding + entropy in MP3 compression" },
      ]} />

      <div className="flex flex-wrap gap-2">
        <Link href={hrefFor("home")} className="text-sm text-primary hover:underline">
          → Return to overview
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("living-fft")} className="text-sm text-primary hover:underline">
          → Living FFT
        </Link>
        <span className="text-muted-foreground">·</span>
        <Link href={hrefFor("living-svd")} className="text-sm text-primary hover:underline">
          → Living SVD
        </Link>
      </div>
    </div>
  );
}
