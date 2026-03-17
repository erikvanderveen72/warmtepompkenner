import { createClient } from '@supabase/supabase-js';
import {
  warmtepompTypes, WarmtepompType,
  warmtepompMerken, WarmtepompMerk,
  subsidieRegelingen, SubsidieRegeling,
  installatieKosten, InstallatieKosten,
  besparingParams, BesparingParams,
} from './fallback-data';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export async function getWarmtepompTypes(): Promise<WarmtepompType[]> {
  if (!supabase) return warmtepompTypes;
  try {
    const { data, error } = await supabase.from('warmtepomp_types').select('*');
    if (error) return warmtepompTypes;
    return data?.length ? data : warmtepompTypes;
  } catch { return warmtepompTypes; }
}

export async function getWarmtepompMerken(): Promise<WarmtepompMerk[]> {
  if (!supabase) return warmtepompMerken;
  try {
    const { data, error } = await supabase.from('warmtepomp_merken').select('*').order('naam', { ascending: true });
    if (error) return warmtepompMerken;
    return data?.length ? data : warmtepompMerken;
  } catch { return warmtepompMerken; }
}

export async function getSubsidieRegelingen(): Promise<SubsidieRegeling[]> {
  if (!supabase) return subsidieRegelingen;
  try {
    const { data, error } = await supabase.from('subsidie_regelingen').select('*');
    if (error) return subsidieRegelingen;
    return data?.length ? data : subsidieRegelingen;
  } catch { return subsidieRegelingen; }
}

export async function getInstallatieKosten(): Promise<InstallatieKosten[]> {
  if (!supabase) return installatieKosten;
  try {
    const { data, error } = await supabase.from('installatie_kosten').select('*');
    if (error) return installatieKosten;
    return data?.length ? data : installatieKosten;
  } catch { return installatieKosten; }
}

export async function getBesparingParams(): Promise<BesparingParams> {
  if (!supabase) return besparingParams;
  try {
    const { data, error } = await supabase.from('besparing_params').select('*').single();
    if (error) return besparingParams;
    return data || besparingParams;
  } catch { return besparingParams; }
}
